# Md Ziaul Mustafa - Portfolio

Static website (plain HTML, CSS and JavaScript). No build step and no dependencies.

## Files
- `index.html` - page structure and content
- `style.css` - all styling (dark theme by default, light theme via the toggle)
- `script.js` - loader, menu, theme toggle, door animation, card tilt, copy-email
- `assets/ziaul.jpg` - profile photo

## Run locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy
Publish the folder as-is. Build command: none. Output/publish directory: `.` (project root)
- Netlify: drag and drop the folder at app.netlify.com/drop
- Vercel: `npx vercel --prod` from this folder (Framework preset: Other)
- GitHub Pages: push to a repo, then Settings > Pages > deploy from the main branch, root folder

## Edit content
Project links, email and text are all in `index.html`. The Gmail contact link is
`https://mail.google.com/mail/?view=cm&fs=1&to=ziaulmustafa2005@gmail.com`.
