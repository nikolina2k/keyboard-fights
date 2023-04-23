export const splitWords = (text: string) => {
    return text.split(' ').filter(w => w != '');
};

export const validateDictionary = (words: string[]) => {
    let exceptions: string[] = [];
    
    words.forEach((word) => {
        if (!word.match(/^[A-Za-z0-9]+$/g)) {
            exceptions.push(`'${word}' must contain only digits or latin characters`);
            return;
        }
        if (word.match(/[A-Z]/g)) {
            exceptions.push(`'${word}' must contain only lowercase characters`);
            return;
        }
    });

    return exceptions;
};

export const makeDictionary = (words: string[]) => {
    return [... new Set(words)];
};

export const formatWords = (words: string[]) => {
    return words.map((word) => {
        return word.toLowerCase().replace(/[^a-z0-9]/g, '');
    });
};
