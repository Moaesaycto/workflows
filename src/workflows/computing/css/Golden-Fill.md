# A Cool Golden Fill Colour Scheme

```css
:root {
    --gold-bright: #F7E49E;
    --gold-base: #EBB345;
    --light-red: #A13419;
    --deep-red: #450F02;
    --deep-black: #050505;
}

.example {
    background-image: linear-gradient(90deg,
        var(--gold-bright) 0%,
        var(--gold-base) 1%,
        var(--deep-red) 10%,
        var(--deep-black) 11%,
        var(--deep-red) 12%,
        var(--light-red) 15%,
        var(--gold-base) 25%,
        var(--gold-bright) 40%,
        white 45%,
        var(--gold-bright) 50%,
        var(--gold-base) 75%,
        var(--light-red) 80%,
        var(--deep-red) 85%,
        var(--gold-base) 90%,
        var(--gold-bright) 100%
    );
}
    ```