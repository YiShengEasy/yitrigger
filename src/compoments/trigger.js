import React from 'react' ;
import PropTypes from 'prop-types'
import ReactDOM, {findDOMNode} from 'react-dom';
import './trigger.css';

const GetPosition = (obj) => {
    var left = 0;
    var top = 0;
    while (obj != document.body) {
        left += obj.offsetLeft;
        top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {left, top}
}
const propTypes = {
    showComponent: PropTypes.element.isRequired,
    showEvent: PropTypes.string,
}

class Trigger extends React.Component {
    //参数默认值
    static defaultProps = {
        showEvent: 'click'
    }
    state = {
        visible: false
    }

    componentDidMount() {
        const node = findDOMNode(this);
        const {showEvent} = this.props;
        if (showEvent === 'hover') {
            node.addEventListener("mouseover", this.onDocumentTouch)
            node.addEventListener("mouseout", this.onMouseLeave)
        }
        else {
            node.addEventListener("mousedown", this.onDocumentClick)
        }
    }
    componentDidUpdate(){
        if(this.state.visible)
        {
            this.appendContainerAndChild(document.body, this.props.showComponent, GetPosition(findDOMNode(this)));

        }
        else{
            let containerNode = document.getElementById('triggerContainer')
            document.body.removeChild(containerNode)
        }
    }
    onDocumentTouch = (event) => {
        this.setState({
            visible:true
        })
    }
    onDocumentClick = (event) => {
        this.setState({
            visible:!this.state.visible
        })
    }
    onMouseLeave = () => {
        this.setState({
            visible:false
        })
    }
    //挂载容器和子组件  ，容器/弹出组件/位置
    appendContainerAndChild(parentDom, popDom, position) {
        //获取背景容器node
        let containerNode = this.createContainer();
        //将Trigger 挂载到容器中
        // ReactDOM.unstable_renderSubtreeIntoContainer(containerNode,popDom,document.body)
        //位置容器
        let positionNode = document.createElement('div');
        positionNode.style.top = position.top + 'px';
        positionNode.style.left = position.left + 'px';
        positionNode.style.position = 'absolute';
        ReactDOM.render(popDom, positionNode);
        containerNode.appendChild(positionNode);
        parentDom.appendChild(containerNode)
    }

    //在body下创建 容器dom
    createContainer() {
        let containerNode = document.getElementById('triggerContainer')
        //已经存在container
        if (!containerNode) {
            containerNode = document.createElement('div');
            containerNode.id = 'triggerContainer';
            containerNode.style.top = '0';
            containerNode.style.left = '0';
            containerNode.style.width = '100%';
            containerNode.style.position = 'absolute';
        }
        return containerNode;
    }

    render() {
        return (
            this.props.children
        )
    }
}

Trigger.propTypes = propTypes;
export default Trigger;