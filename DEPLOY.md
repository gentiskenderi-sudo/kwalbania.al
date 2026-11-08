# Publikimi në kwalbania.al (Plesk)

Faqja aktuale shërbehet nga **Plesk** (Linux, nginx). Faqja e re është statike: mjafton të vendosen skedarët në `httpdocs/`.

## 0. Para çdo gjëje: backup
Plesk → **Websites & Domains → kwalbania.al → Backup Manager → Back Up** (ose shkarko `httpdocs` nga File Manager).

## Opsioni A — automatik me GitHub (rekomandohet)
Çdo `push` në `main` publikon faqen vetë (`.github/workflows/deploy.yml`).

1. Plesk → **Websites & Domains → kwalbania.al → FTP Access**: krijo ose përdor një llogari FTP me qasje te `/httpdocs`.
2. GitHub → repo → **Settings → Secrets and variables → Actions → New repository secret**, shto:
   - `FTP_SERVER` → p.sh. `kwalbania.al` (ose IP e serverit)
   - `FTP_USERNAME` → emri i llogarisë FTP
   - `FTP_PASSWORD` → fjalëkalimi
3. Bashko degën në `main` (Pull Request → Merge). Publikimi nis automatikisht; ndiqe te **Actions**.
4. Mund ta nisësh edhe me dorë: **Actions → Deploy to kwalbania.al → Run workflow**.

Skedarët e vjetër që nuk ekzistojnë në faqen e re nuk fshihen (p.sh. `_astro/`), që të mos prishet asgjë.

## Opsioni B — Git në Plesk
Plesk → **kwalbania.al → Git → Add Repository** → Remote: `https://github.com/gentiskenderi-sudo/kwalbania.al.git`, dega `main`, Deployment path `httpdocs`, mode **Automatic**.

## Opsioni C — me dorë
Plesk → **File Manager → httpdocs** → ngarko `index.html`, `assets/`, `luksoze/`, `realtoret/`, `en/`.

## Pas publikimit, kontrollo
- https://kwalbania.al/ · https://kwalbania.al/luksoze/ · https://kwalbania.al/realtoret/ · https://kwalbania.al/en/
- butoni SQ/EN, kërkimi (hap kwalbania.kw.com), formulari (hap email-in), WhatsApp.
- Pastro cache-in e shfletuesit (Ctrl+F5) nëse sheh ende faqen e vjetër.
