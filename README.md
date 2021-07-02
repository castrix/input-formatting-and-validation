# input-formatting-and-validation
Javascript &amp; Typescript input formatting &amp; validation

compilation of formatting and validation for Javascript & Typescript

## example

formatting

```
import { formatAlphabetOnly, formatAlphabetOnly } from "./formatting";

const someVariable = "asdasdasd0123"

const alphabetOnly = formatAlphabetOnly(someVariable) //output: "asdasdasd"

const numberOnly = formatNumberOnly(someVariable) //output: "0123"
```

validation

```
import { isValidNumber, isNoSpecialChar } from "./validation";

const someVariable = "asdasdasd0123"

isValidNumber(someVariable) //output: false

isNoSpecialChar(someVariable) //output: true
```
