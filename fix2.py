import glob, re

# A cleaner approach: Let us restore index.html first if needed or target via clean JS injection
files_to_check = glob.glob("**/*.html", recursive=True)
for file in files_to_check:
    if "node_modules" in file or ".git" in file:
        continue
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Clean up any malformed anchor tags in announcement/marquee
        # Replace the announcement wrapper to cleanly wrap with a safe dynamic onclick handler
        if "announcement" in content or "txt-announce" in content:
            # Let us make sure the announcement div links properly via a clean data attribute or safe JS
            content = re.sub(
                r"<div class=\"announcement\">.*?</div>",
                r'<div class=\"announcement\" style=\"cursor:pointer;\" onclick=\"window.open(localStorage.getItem(\'adminMarqueeUrl\') || \'https://youtube.com\', \'_blank\');\">📢 <span id=\"txt-announce\">श्री राम नर्सरी (भुन्ना) के नए पौधे देखने के लिए यहाँ क्लिक करें!</span></div>',
                content,
                flags=re.DOTALL
            )
        
        # Hide extra WhatsApp buttons on plant cards cleanly
        content = content.replace('class="button button-whatsapp"', 'class="button button-whatsapp" style="display:none;"')
        content = content.replace('class="whatsapp-btn"', 'class="whatsapp-btn" style="display:none;"')
        
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Cleanly fixed: {file}")
    except Exception as e:
        print(f"Error in {file}: {e}")

print("Clean fix completed!")
