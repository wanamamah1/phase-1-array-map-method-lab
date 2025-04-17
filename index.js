const titleCased = () => {
  return tutorials
}

function titleCased() {
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');

    const titleCasedWords = words.map(word => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    
    return titleCasedWords.join(' ');
  });
}