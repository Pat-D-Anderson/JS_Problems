let wordCount = (sentence) => {
    const sentenceArr = sentence.split(' ');
    console.log(sentenceArr.filter(word => word !== '').length);
};

wordCount('Success is never final, failure is never fatal, and it\'s courage that counts.  ');