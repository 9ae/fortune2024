enum FortuneType {
    words,
    video
}

type WordsOfWisdom = {
    type: FortuneType.words,
    message: string
}

type VideoMessage = {
    type: FortuneType.video,
    url: string
}

export type Fortune = WordsOfWisdom | VideoMessage;

export const fortunes: Fortune[] = [
    { type: FortuneType.words, message: "The early bird gets the worm" },
    { type: FortuneType.video, url: "https://vimeo.com/818539277" }
];

export const isVideo = (fortune: Fortune): fortune is VideoMessage => {
    return fortune.type === FortuneType.video;
}

export const isWords = (fortune: Fortune): fortune is WordsOfWisdom => {
    return fortune.type === FortuneType.words;
}
