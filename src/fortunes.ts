import Papa from "papaparse";

const FortuneType = {
    words: "words",
    video: "video",
};

type WordsOfWisdom = {
    type: typeof FortuneType.words,
    message: string
}

type VideoMessage = {
    type: typeof FortuneType.video,
    message: string
}

export type Fortune = WordsOfWisdom | VideoMessage;

// export const fortunes: Fortune[] = [
//     { type: FortuneType.words, message: "The early bird gets the worm" },
//     { type: FortuneType.video, url: "https://vimeo.com/818539277" }
// ];


export const getFortunes: () => Promise<Fortune[]> = async () => {
    const response = await fetch("/public/data.csv");
    const responseText = await response.text();
    const responseCsv = Papa.parse(responseText, {header: true, skipEmptyLines: true});
    return responseCsv.data as Fortune[];
}


export const isVideo = (fortune: Fortune): fortune is VideoMessage => {
    return fortune.type === FortuneType.video;
}

export const isWords = (fortune: Fortune): fortune is WordsOfWisdom => {
    return fortune.type === FortuneType.words;
}
