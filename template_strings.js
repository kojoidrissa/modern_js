const name = "Kojo";
const age = 100;
const job = "Awesome Person";
const city = "H-Town!";
let html;

function hello() {
    return 'hello';
}

// w/ Template Strings/Literals

html = ` 
    <ul>
        <li>${name}</li>
        <li>${age}</li>
        <li>${job}</li>
        <li>${city}</li>
        <li>${2*7}</li>
        <li>${hello()}</li>
        <li>${age > 65 ? 'Y U SO OLD?!?' : 'Spry!' }</li>
    </ul>
`;
document.body.innerHTML = html;