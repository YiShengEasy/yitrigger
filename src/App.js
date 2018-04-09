import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Trigger from './compoments/trigger'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{
                    marginTop: 200,
                    marginLeft: 100,
                    position: 'relative',
                    background: 'blue',
                    width: 500,
                    height: 500
                }}>
                    <div style={{
                        marginTop: 260,
                        marginLeft: 200,
                        position: 'relative',
                        background: '#fff',
                        width: 300,
                        height: 300
                    }}>

                        <Trigger
                            showComponent={<div>你好！</div>}>
                            <div style={{
                                width: 200,
                                height: 200,
                                left: 50,
                                top: 50,
                                position: 'absolute',
                                background: 'red'
                            }}></div>
                        </Trigger>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
