import { Base64 } from 'js-base64';


export function generateEmailPayload(data) {
    const subject = data.subject;
    const receiver = data.receiver;
    const sender = data.sender;
    const message = data.message;
    
    
    // RFC 2822 format
    let rfc2822Format = `From: ${sender}\n`
        rfc2822Format += `To: ${receiver}\n`
        rfc2822Format += `Subject: ${subject}\n\n`

        rfc2822Format += `${message}`;


    const payload = {
        raw: Base64.encode(rfc2822Format) // base64Url
    };

    return payload;
}