const r=`# A Cool Golden Fill Colour Scheme\r
\r
\`\`\`css\r
:root {\r
    --gold-bright: #F7E49E;\r
    --gold-base: #EBB345;\r
    --light-red: #A13419;\r
    --deep-red: #450F02;\r
    --deep-black: #050505;\r
}\r
\r
.example {\r
    background-image: linear-gradient(90deg,\r
        var(--gold-bright) 0%,\r
        var(--gold-base) 1%,\r
        var(--deep-red) 10%,\r
        var(--deep-black) 11%,\r
        var(--deep-red) 12%,\r
        var(--light-red) 15%,\r
        var(--gold-base) 25%,\r
        var(--gold-bright) 40%,\r
        white 45%,\r
        var(--gold-bright) 50%,\r
        var(--gold-base) 75%,\r
        var(--light-red) 80%,\r
        var(--deep-red) 85%,\r
        var(--gold-base) 90%,\r
        var(--gold-bright) 100%\r
    );\r
}\r
    \`\`\``;export{r as default};
