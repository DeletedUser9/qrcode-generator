import qrcode
from pathlib import Path

def create_qr_code(data:str):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    save_path = Path(__file__).resolve().parents[2] / "public" / "qr-code.png"
    img.save(save_path)
    return str(save_path)