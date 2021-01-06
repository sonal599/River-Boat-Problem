
import React, { Component } from 'react'

class Boat extends Component {

    constructor() {
        super()
        this.state = {
            river_velocity: 0,
            person_velocity: 0,
            angle_of_swim: 0,
            width_of_river: 0,
            total_time: 0,
            


        }
    }

    solution() {
        //calculation
        var z = 0,temp, sinevalue, resultant_velocity, radian;

            if(this.state.river_velocity=='' || this.state.person_velocity==''
             || this.state.angle_of_swim =='' || this.state.width_of_river=='')
             {
                 alert('please enter reuired field');
             }
        else if(this.state.angle_of_swim <=90)
        {
                resultant_velocity = Math.sqrt(((this.state.river_velocity ** 2) + (this.state.person_velocity ** 2)))
                console.log(resultant_velocity);
                radian = this.state.angle_of_swim * 0.0174533;
                sinevalue = Math.sin(radian);
                console.log(sinevalue)
                z = (this.state.width_of_river / sinevalue);
                console.log(z)

                this.setState({ total_time: (z / resultant_velocity).toFixed(2),})
                console.log(this.state.total_time);

                //graph plotting
                        var c = document.getElementById("graph");
                        var ctx = c.getContext("2d");
                        var ct = c.getContext("2d");
                        ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
                        ctx.beginPath();
                        ctx.moveTo(270, 404);
                        ctx.lineTo(270, 0);
                        //ctx.lineTo(70, 100);
                        ctx.stroke();
                        ct.beginPath();
                        ct.moveTo((270+z)*2, 404);
                        ct.lineTo(270, 0);
                        //ctx.lineTo(70, 100);
                        ct.stroke();
        }
       

        else if(this.state.angle_of_swim<= 180 && this.state.angle_of_swim > 90)
        {
            this.state.angle_of_swim= 180 - this.state.angle_of_swim;
            resultant_velocity = Math.sqrt(((this.state.river_velocity ** 2) + (this.state.person_velocity ** 2)))
                console.log(resultant_velocity);
                radian = this.state.angle_of_swim * 0.0174533;
                sinevalue = Math.sin(radian);
                console.log(sinevalue)
                z = (this.state.width_of_river / sinevalue);
                console.log(z) 
                

                this.setState({ total_time: (z / resultant_velocity).toFixed(2)
                   
                })
                console.log(this.state.total_time);

                 //graph plotting
                 var c = document.getElementById("graph");
                 var ctx = c.getContext("2d");
                 var ct = c.getContext("2d");
                 ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
                 ctx.beginPath();
                 ctx.moveTo(270, 404);
                 ctx.lineTo(270, 0);
                 //ctx.lineTo(70, 100);
                 ctx.stroke();
                 ct.beginPath(); 
                 ct.moveTo((270+z)*2, 404);
                 ct.lineTo(270, 0);
                 //ctx.lineTo(70, 100);
                 ct.stroke();

        }
        else if(this.state.angle_of_swim > 180)
        {
            alert("invalid angle");
        }


    }

    render() {
        return (
            <div>
                <h1 className='text-center mt-2'>River Boat Problem</h1>

                <div className='row'>
                    <div className='col'>
                        <div className='container-fluid mt-5 ml-2'>
                            <label for="">River velocity:{' '}</label>
                            <input type="text" className='m-3' id="" placeholder="5 m/s" onChange={(e) => { this.state.river_velocity = e.target.value }} />

                            <label for="">Person velocity:{' '}</label>
                            <input type="text" required className='m-3' id="" placeholder='3 m/s' onChange={(e) => { this.state.person_velocity = e.target.value }} />
                            <label for="">Angle of swim:{' '}</label>
                            <input type="text" className='m-3' id="" placeholder='45 degrees' onChange={(e) => { this.state.angle_of_swim = e.target.value }} />
                            <label for="">Width of river:{' '}</label>
                            <input type="text" className='m-3' id="" placeholder='60 m' onChange={(e) => { this.state.width_of_river = e.target.value }} />
                        </div>
                        <div className='container-fluid text-center'>
                            <button className=' btn btn-primary' onClick={() => this.solution()}> Answer</button>
                        </div>

                        <div className='container-fluid mt-3 text-center'>
                            {this.state.total_time !== 0 ? <div>
                                <h6>Total time taken by the person to cross the river:
                        {' '}{this.state.total_time}{' '}seconds</h6>
                            </div> : ''}
                        </div>
                    </div>
                    <div className='col ' >
                    <div className='container-fluid  mt-5' >
                    <canvas id='graph' width="600" height="320" style={{border:'2px solid #d3d3d3'}} className='mt-2'/>
                    </div>
                    <div className='text-center'>
                        <h6>Trajectory of Flow</h6>
                    </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Boat

