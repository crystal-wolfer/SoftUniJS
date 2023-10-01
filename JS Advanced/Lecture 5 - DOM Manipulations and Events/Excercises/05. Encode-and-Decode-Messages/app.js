function encodeAndDecodeMessages() {
    //charCodeAt() to get the ASCII code; fromCharCode() to tur it into string

    //The password for my bank account is  123pass321

    //capture elements
    const allBtns = document.querySelectorAll('div>button');
    const encodeBtn = allBtns[0];
    const decodeBtn = allBtns[1];
    const allTextFields = document.querySelectorAll('div>textarea');
    const messageField = allTextFields[0];
    const decodeField = allTextFields[1];

    encodeBtn.addEventListener('click', encodeHandler);
    decodeBtn.addEventListener('click', decodeHandler);

    function encodeHandler(){
        let messageToEncode = messageField.value;
        let encodedMessage = '';

        for (let i = 0; i < messageToEncode.length; i++) {
           encodedMessage += String.fromCharCode(messageToEncode.charCodeAt(i) + 1);
        }

        decodeField.value = encodedMessage;
        messageField.value = '';
    }

    function decodeHandler() {
        let messageToDecode = decodeField.value;
        let decodedMessage = '';

        for (let i = 0; i < messageToDecode.length; i++) {
            decodedMessage += String.fromCharCode(messageToDecode.charCodeAt(i) - 1);
        }

        decodeField.value = decodedMessage; 
    }
 
}