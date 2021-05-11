# action-erstatninger

Action for å erstatte ord i filer. Det finnes mange andre actions som kunne vært brukt.
Denne er skrevet i hovedsak for å lære.

https://github.com/actions/toolkit

```
      - name: Erstatte med versjon
        uses: ./github/actions/action-erstatninger
        id: erstatningersteg
        with:
          sok: '{VERSJON}'
          erstatt: '${{steps.taggesteg.outputs.tag}}'
          filer: 'app/index.html'
          dry-run: false
```

src: Her ligger selve koden.
out: Her transpilerer tsc filene sine (trengs for blant annet debug).
dist: Her havner det ncc bygger. index.js her er det som blir brukt i GitHub Actions.
