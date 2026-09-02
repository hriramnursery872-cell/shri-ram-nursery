import glob, re

files_to_check = glob.glob("**/*.html", recursive=True)
for file in files_to_check:
    if "node_modules" in file or ".git" in file:
        continue
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # 1. Update top marquee to open dynamic admin link instead of WhatsApp
        content = re.sub(
            r"<a\s+([^>]*?)href=\"https://wa\.me/[^\"]*\"([^>]*?)>",
            r"<a \1 href=\"#\" onclick=\"window.open(localStorage.getItem(\'adminMarqueeUrl\') || \'https://youtube.com\', \'_blank\'); return false;\" \2>",
            content
        )
        
        # 2. Hide extra WhatsApp buttons on plant cards, keeping Details, Share, Like
        content = content.replace("class=\"button button-whatsapp\"", "class=\"button button-whatsapp\" style=\"display:none;\"")
        content = content.replace("class=\"whatsapp-btn\"", "class=\"whatsapp-btn\" style=\"display:none;\"")
        
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Successfully updated: {file}")
    except Exception as e:
        print(f"Skipped {file}: {e}")

print("All local updates completed successfully!")
