# Qadam Teacher — Same Curriculum. Unequal Support.

The final static research website, including all six data figures, calculators, interactive tables, reading-book animation, photographs, 32 bibliography entries and AI transparency statement. No build command, API key or server is required. Fonts and photographs are included locally.

## Upload to GitHub

1. Create or open a public GitHub repository, for example `qadam-teacher`.
2. Unzip the download on your computer. Do not upload the ZIP itself.
3. In the repository, choose **Add file → Upload files**.
4. Upload all files and the `assets` folder from inside the extracted folder. Keep their names and folder structure. `index.html` must be at the repository root, alongside `app.js`, the stylesheets and `assets/`.
5. Commit the upload to `main`.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
8. Wait for the deployment and use the **Visit site** link in Pages settings.

The address normally has the form `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

GitHub's publishing guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files to keep together

- `index.html`: complete page content and linked bibliography.
- `app.js`: data figures, calculators, tables and demonstration.
- `experience.js`: reading-book navigation and table interactions.
- `style.css` and `experience.css`: visual design and responsive layout.
- `fonts.css` and `assets/fonts/`: bundled fonts.
- `assets/school-community.png` and `assets/teacher-classroom.png`: supplied photographs.
- `favicon.svg`: site icon.
- `.nojekyll`: serves these prepared static files without a Jekyll build. This may be hidden by your file manager; the site can also work without it because none of its asset paths require Jekyll processing.

## Updating the website

Replace the changed files in the same repository, retain their names, and commit the changes to `main`. GitHub Pages will redeploy the same site address. When replacing the whole website, upload the complete updated package and retain the `assets/` folder structure. Refresh the published page after deployment.

External academic readings open on their original publishers' websites. The Qadam Teacher demonstration is scripted; its calculators are hypothetical models, as stated in the website.
