function editElement(ref, match, replacer) {
    let text = ref.textContent;
    let matcher = new RegExp (match, 'g');
    let edited = content.replacer(matcher, replacer);
    text = edited;
}