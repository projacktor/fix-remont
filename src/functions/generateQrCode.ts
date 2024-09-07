import { AwesomeQR } from 'awesome-qr'

export async function generateQrCode(
  url: string,
  logoSrc: string,
  size: number
): Promise<string | null> {
  try {
    const qrCode = new AwesomeQR({
      text: url,
      size: size,
      logoImage: logoSrc
    })

    const generatedQRCode = await qrCode.draw()

    if (generatedQRCode) {
      return generatedQRCode as string
    } else {
      console.error('QR-код не был сгенерирован')
      return null
    }
  } catch (error) {
    console.error('Ошибка при генерации QR-кода:', error)
    return null
  }
}
