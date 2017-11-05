import { GalleryConfig } from 'ng-gallery';

export const galleryConfig: GalleryConfig = {
  'style': {
    'background': 'rgba(25,25,25,0.8)',
    'width': '100%',
    'height': '100%'
  },
  'description': {
    'text': true,
    'counter': true,
    'style': {
      'text-align': 'center',
      'font-size': '3vmin',
      'letter-spacing': '2px',
      'margin-bottom': '3px',
    }
  },
  'animation': 'fade',
  'thumbnails': {
    'position': 'top',
    'space': 20,
    'width': 180,
    'height': 135
  },
  'navigation': true,
  'gestures': true
};
