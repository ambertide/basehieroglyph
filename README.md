# `@ambertide/basehieroglyph`

![NPM Version](https://img.shields.io/npm/v/%40ambertide%2Fbasehieroglyph)
![GitHub License](https://img.shields.io/github/license/ambertide/basehieroglyph)


A Base1024 text encoding library... with hieroglyphs! Here is a [demo](https://codepen.io/ambertide/pen/azpPYMo)

## Testimonials

> 𓂋𓐍𓏜𓆑𓋴𓐍𓂋𓏜𓇋𓋴𓊪𓅱𓄤𓆑𓂋 👍
> - 𓁗𓃔

> Man this shit ain't valid hieroglyphics
> - Jean-François Champollion

## What??

Ever wanted to encode arbitirary text strings in Egyptian Hieroglyphics?
AND it probably[^1] handles Unicode? Seek no more friend! With this Base1024
Unicode to Egyptian Hieroglyphics encoder/decoder library you too can convert
and deconvert your arbitirary text into hierostrings, in a safe[^2], fast[^3]
and memory efficent[^4] manner.

[^1]: I am pretty sure this works most of the time, 90% of the time but, like, don't depend on this on production lol.
[^2]: It has tests and stuff.
[^3]: Okay, look, Javascript really wants to work with bytes so I go through a *few* loops to convert from uint8 to uint10 to hieroglyphics so it is probably slow as f u c k, but does it matter? at the grand scheme of things aren't we all brothers and sisters? aren't we all living under the same sun?
[^4]: This will crash on big payloads 🙏

## Frequently Asked Questions

### This doesn't translate actual sentences, right?

No, it simply encodes your text, just like Base64, but rather than
taking 6-bits and encoding to 64 values, it takes 10 bits and encodes
to 1024... hieroglyphs, a hierostring, if you will.

### You wrote this with AI, right? You haven't spent actual...

...Time on this? You bet I did! I am perfectly capable of producing slop on my
own.

### But... this has tests and... YOU SPENT ACTUAL FREE TIME FOR THIS?

Oh yes, I am actually quite proud of the way conversion works, essentially:

```mermaid
stateDiagram-v2
    direction LR
    [*] --> string
    string --> u8[]
    u8[] --> u40[]
    u40[] --> u10[]
    u10[] --> 𓆍𓈗𓄀𓀀
    𓆍𓈗𓄀𓀀 --> [*]
```

For encoding, and reverse for decoding, and you pad and then de-pad
on u40[] conversions.

### But I thought Javascript didn't have uint40 and uint10?

It doesn't, I manually convert them.

### Jesus Christ...

Yeah...

### What even is the use case man?

This has so many valid use cases that it would be a waste of time
to list all of them.
