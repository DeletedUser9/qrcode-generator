from createQr import create_qr_code

img = create_qr_code("https://www.youtube.com", "#000000")
img.save("test-qr.png")

print("saved")