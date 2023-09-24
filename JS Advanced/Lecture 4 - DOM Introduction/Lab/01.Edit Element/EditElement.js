function edit(ref, match, replacer) {
    const text = ref.textContent;
    const matcher = new RegExp (match, 'g');
    const edited = text.replace(matcher, replacer);
    ref.textContent = edited;
}
    