import React, {Component} from 'react'
import './pictures.css'


const Pictures = props => {


        // console.log(this.state.clicked);

        return (


            <div className="card">
                <div className="card-body">
                    <img key={props.id} alt={props.name} id={props.id} src={props.image}
                         onClick={() => {
                             props.handleClick(props.clicked, props.id)
                         }}/>

                </div>
            </div>

        )


};

export default Pictures;