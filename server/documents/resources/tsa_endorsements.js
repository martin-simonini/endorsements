const A14 = ({studentName, typeOfDocument, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatLeft">
        <tr>
            <td class="title">
                Endorsement of U.S. citizenship recommended by the Transportation Security
                Administration (TSA)
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has presented me a ${typeOfDocument} establishing that ${gender} is a U.S. citizen
                or national in accordance with 49 CFR § 1552.3(h). <br><br>
            </td>
        </tr>
       <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`
}

module.exports = {
    A14: A14
}