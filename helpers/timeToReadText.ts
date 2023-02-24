const wordsPerMinute = 265

export default function timeToReadText(text: string) {
    const wordsCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordsCount / wordsPerMinute).toString()
}


// Paa saber mais sobre mínimo de palavras que um adulto lê por minuto:

// https://medium.com/blogging-guide/how-is-medium-article-read-time-calculated-924420338a85

// https://help.medium.com/hc/en-us/articles/214991667-Read-time

// https://www.forbes.com/sites/brettnelson/2012/06/04/do-you-read-fast-enough-to-be-successful/?sh=1bd3b634462e

// http://www.staples.com/sbd/cre/marketing/technology-research-centers/ereaders/speed-reader/


/* Third-grade students = 150 words per minute (wpm)
Eighth grade students = 250 wpm
Average college student = 450 wpm
Average "high-level exec" = 575 wpm
Average college professor = 675 wpm
Speed readers = 1,500 wpm
World speed reading champion = 4,700 wpm
Average adult = 300 wpm */