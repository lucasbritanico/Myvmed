from PIL import Image
from collections import Counter

path = "/Users/sayedfalil/.gemini/antigravity/brain/a73c5cb5-65dc-4ff7-904a-564315bafd0d/uploaded_media_1770140338405.jpg"
try:
    img = Image.open(path)
    img = img.convert("RGB")
    img = img.resize((50, 50))
    pixels = list(img.getdata())
    # Filter out near-white background
    pixels = [p for p in pixels if p[0] < 245 or p[1] < 245 or p[2] < 245]
    
    if not pixels:
        print("Image is mostly white.")
    else:
        counts = Counter(pixels)
        most_common = counts.most_common(3)
        print("Dominant Colors:")
        for color, count in most_common:
            print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}")
except Exception as e:
    print(f"Error: {e}")
