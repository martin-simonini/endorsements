module.exports = ({studentFirstName, studentMiddleInitial, studentLastName}) => {
    const today = new Date();
    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Title</title>
                <style>
                    table{
                        /*max-width: 800px;*/
                        /*margin: auto;*/
                        /*padding: 30px;*/
                        /*font-family: "Times New Roman", Times, serif;*/
                         max-width: 800px;
                         margin: auto;
                         padding: 30px;
                         border: 1px solid #eee;
                         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                         font-size: 16px;
                         line-height: 24px;
                         font-family: "Times New Roman", Times, serif;,
                         color: #555;
                        
                    }
                    
                    .endorsement_code{
                        width: 55px;
                        text-align: left;
                        vertical-align: top;
                    }
                    .endorsement_text{
                        font-size: 1em;
                    }
                    .title{
                        font-weight: bold; !important;
                    
                        text-align: left;
                    }
                    .signature {
                        border: 0;
                        border-bottom: 1px solid #000;
                    }
                </style>
            </head>
            <body>
            <table>
                <tr>
                    <td class="endorsement_code title"><h2>A1</h2></td>
                    <td class="title">
                        
                        <h2>
                            Prerequisites for practical test: Title 14 of the Code of Federal Regulations <br>
                            (14 CFR) part <a href="https://www.ecfr.gov/cgi-bin/text-idx?SID=dbefbaa41e3aa85833650f1d6095d35f&mc=true&node=pt14.2.61&rgn=div5"> 61</a>,
                            <a href="https://www.ecfr.gov/cgi-bin/text-idx?SID=1591c6e8551c6684d54f2bb87bcd6345&mc=true&node=se14.2.61_139&rgn=div8">§ 61.39(a)(6)(i)</a> 
                            and <a href="https://www.ecfr.gov/cgi-bin/text-idx?SID=1591c6e8551c6684d54f2bb87bcd6345&mc=true&node=se14.2.61_139&rgn=div8">(ii)</a>   
                        </h2>
                    </td>
                </tr>
                <tr>
                    <td class="endorsement_code"></td>
                    <td class="endorsement_text">
                        I certify that ${studentFirstName}, ${studentMiddleInitial}, ${studentLastName} has received and logged training time within
                        2 calendar-months preceding the month of application in preparation for the practical test
                        and [he or she] is prepared for the required practical test for the issuance of [applicable]
                        certificate.
                    </td>
                </tr>
                <tr>
                    <td class="endorsement_code"></td>
                    <td>Signed <input type="text" class="signature" /> </td>
                    <td>Date <input type="text" class="signature" /> </td>
                </tr>
            </table>
            </body>
            </html>

    `;
};
