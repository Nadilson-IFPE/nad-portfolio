import { MutableRefObject, useEffect } from 'react'

// Source: https://www.typescriptlang.org/play?ssl=8&ssc=9&pln=9&pc=18#code/JYWwDg9gTgLgBAbzgVwM4FMCiAzb6DGMANChgErrYkCyyMAhgEYA26F2A8owFYHwC+cbFAgg4Acijp6hcQCg52ZADtCwCMtLoOygMLNg+ANYc6qYABN0ACinYAXHFoMWbSl16EAPAAkAKtQAMpisIOjK8AA+KMpW2MDK6BYAfCQAFvSxrFCO1ugAbo7UEGhY+eFRcH4l+GmY5REAlHAAvMlw+RCWzQhycFo4eITWff1w1s1tiKNjcPgaqPAGi+HoUK3jBRVFJRj1FXDR1ci1+02t7b2zswD0N3AAIhBwyhAwaQkA5nDA2HMGxi+cDs4lQcHQoQO0DgVlQ+HCVgi4MhEVQM2uv3GAEI7AA6fDIKBSJGRaJ5BowXEMKCfdDwBKLTLwiB-fxBELoMJIgBk3OBlHxhOJlPmEXoDPJFSp9BpdMa8um12uUhghOUAG50bN+FqxhksmtJU1NUr+CbrhYIASuZT6BYLGcYIFgCtElBrAAiEC7JIQADuyg9JGWMFWUEa5tmlutUrtDopztdho9MBqaUZsCDcBDYYjupVavGk0uuv60eQNtxUm95UdidDbs93tKloDWZzbrzSrLVorUurEFrCZdDeTqZO6epMHbI9zkbGZvR-CI6IA2nZ0pkLNkALqjPP8IA
function UseOnClickOutside(
  ref: MutableRefObject<HTMLElement | undefined>,
  handler: (ev: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        (event.target instanceof HTMLElement &&
          ref.current.contains(event.target))
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default UseOnClickOutside
