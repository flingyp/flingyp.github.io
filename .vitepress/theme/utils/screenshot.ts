import { toPng } from 'html-to-image';

interface ScreenshotOptions {
  target?: HTMLElement | null;
  fileName?: string;
  filename?: string;
  preCapture?: () => void;
  nextCapture?: () => void;
}

export const capture = async (options: ScreenshotOptions = {}) => {
  try {
    if (options.preCapture) {
      await options.preCapture();
    }

    const targetElement = options.target || document.body;
    const dataUrl = await toPng(targetElement, {
      backgroundColor: '#FFF',
    });
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = options.filename || 'screenshot.png';
    link.click();

    if (options.nextCapture) {
      await options.nextCapture();
    }
  } catch (error) {
    console.error('截图失败:', error);
  }
};

export const getFilename = () => {
  const pathname = decodeURIComponent(window.location.pathname);
  const filename = pathname.split('/').pop();
  return filename?.split('.')[0];
};
