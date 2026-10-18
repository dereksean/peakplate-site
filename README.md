Peak Plate's public pages, published via GitHub Pages at https://dereksean.github.io/peakplate-site/.

- `index.html`: the privacy policy (a single static page with no scripts or external assets). Both app stores link to the site root, so it stays there.
- `app/index.html`: the landing page every post and ad links to, at https://dereksean.github.io/peakplate-site/app/. Its `?c=` parameter (`site`, `video`, `videoboost`, `coach`, `searchads`) picks the campaign links on the store badges (`app/campaign.js`); anything else means `site`.
- `app/coach.html`: the kit for coaches and team parents. Opened as `coach.html?code=TEAMCODE`, it shows that team's App Store offer code (`app/coach.js`).

The pages load nothing from other sites, set no cookies and keep no analytics.
