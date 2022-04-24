import React, { useRef, useState } from 'react'
import '../Styles/createpdf.css'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
function Createpdf() {
    const paperref = useRef(null)

    const createpdf = () => {
        html2canvas(paperref.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF()
            pdf.addImage(imgData, 'PNG', 0, 0)
            pdf.save('test.pdf')
        })
    }
    return (
        <div>
            <div className='main-page'>
                <div className='paper' ref={paperref}>
                    <div className='paper-header' contentEditable>
                         letter name
                    </div>
                    <div className='paper-left-content'>
                        <div className='paper-title'>
                            From
                        </div>
                        <div className='paper-content' contentEditable>
                        <div>Edit the from address</div>
                        </div>
                    </div>
                    <div className='paper-left-content'>
                        <div className='paper-title'>
                            To
                        </div>
                        <div className='paper-content' contentEditable>
            <div>Edit the to address</div>
                        </div>
                    </div>
                    <div className='paper-left-content sub'>
                        <span className='paper-title' contentEditable>
                            Sub:
                        </span>
                        <span contentEditable>
                            click to edit
                        </span>

                    </div>
                    <div className='paper-left-content content'>
                        <div className='' contentEditable>
                            Respected Sir
                        </div>
                        <div className='paper-content mt-2' contentEditable>
                            Hope you guys like this.
                            Click on any content to edit it.just edit it on the go and download it as a pdf.
                        </div>
                    </div>
                    <div className='paper-center-content mt-2'>
                        <div>Thanking you</div>
                    </div>
                    <div className='paper-right-content mt-2'>
                        <div contentEditable>
                            Yours's faithfully
                        </div>
                        <div contentEditable>
                            your name
                        </div>
                    </div>
                    <div className='paper-left-content mt-2'>
                        <div>
                            <span>Date:</span><span contentEditable>12/09/2002</span>

                        </div>
                        <div>
                            <span>Place:</span><span contentEditable>Bangalore</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='btn'>
                <button style={{ textAlign: "center" }} onClick={createpdf}>
                    Create pdf
                </button>
            </div>

        </div>
    )
}

export default Createpdf
