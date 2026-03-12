import qrcode

def create_qr_code(data):
    qr = qrcode.QRCode(version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,)
    qr.add_data(data)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="white", back_color="blue")
    
    return img