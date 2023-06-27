import React, { Component } from 'react';
import { PropsContext } from './Props_Parent_Context';

class Props_ChildD_Context extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-12 mx-2 my-2 bg-secondary'>

                        <PropsContext.Consumer>
                        {
                            (temp) => {
                                return (
                                    <h5>Child D Component - {temp}</h5>
                                )
                            }
                        }
                        
                        </PropsContext.Consumer>

                    </div>
                </div>
            </div>
        )
    }
}

export default Props_ChildD_Context;