

const A41 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Fundamentals of instructing knowledge test: § 61.183(d).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required fundamentals of instruction training of § 61.185(a)(1). I have determined that ${gender} is prepared for the Fundamentals of Instructing knowledge test. <br> <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}

const A42 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight instructor aeronautical knowledge test: § 61.183(f).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.185(a)[(2) or (3) (as appropriate to the flight instructor rating sought)]. I have determined that ${gender} is prepared for the Flight Instructor knowledge test. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A43 = ({studentName, gender, A43_catClass, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight instructor ground and flight proficiency/practical test: § 61.183(g). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.187(b). I have determined that ${gender} is prepared for the CFI –  ${A43_catClass} practical test<br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A44 = ({studentName, gender, A44_practical, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight instructor certificate with instrument—(category/class) rating/practical test: §§ 61.183(g), and 61.187(a) and (b)(7).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required certificated flight instructor – instrument training of § 61.187(b)(7). I have determined ${gender} is prepared for the certificated flight instructor – instrument – ${A44_practical} practical test.<br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A45 = ({studentName, gender, A45_practical, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Spin training: § 61.183(i)(1).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.183(i) in ${A45_practical}. I have determined that ${gender} is competent and possesses instructional proficiency in stall awareness, spin entry, spins, and spin recovery procedures. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A46 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Helicopter Touchdown Autorotation: FAA-S-8081-7, Flight Instructor Practical Test Standards for Rotorcraft (Helicopter & Gyroplane).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received training in straight-in and 180-degree autorotations to include touchdown. I have determined that ${gender} is competent in instructional knowledge relating to the elements, common errors, performance, and correction of common errors related to straight-in and 180-degree autorotations. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

module.exports = {
    A41: A41,
    A42: A42,
    A43: A43,
    A44: A44,
    A45: A45,
    A46: A46
}
