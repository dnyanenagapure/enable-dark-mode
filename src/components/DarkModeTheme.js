import React, {useState} from 'react'

export default function DarkModeTheme() {
    const[myStyle,setmyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
    
    const[btnText,setBtnText]=useState("Enable light mode")
    const ChangeColor=()=>{
        if(setmyStyle.color==='white'){
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border: '1px solid white'
            })
            setBtnText("Enable light mode")
        }
            else{
                setmyStyle({
                    color:'black',
                    backgroundColor:'white'
                })
            setBtnText("Enable dark mode")
            }
        }

  return (
    <div>
        <>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"></link>

        <div className="container my-4" style={myStyle}>
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne" style={myStyle}>
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                    </button>
                </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo" style={myStyle}>
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                    Some placeholder content for the second accordion panel. This panel is hidden by default.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree" style={myStyle}>
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                    </button>
                </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                </div>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-primary my-4" onClick={ChangeColor}>{btnText}</button>
        </div>
      </>
    </div>
  )
}
