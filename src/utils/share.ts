export const shareUtils = {
  // Twitter Share
  twitter: (url: string, title: string) => {
    const text = encodeURIComponent(title);
    const shareUrl = encodeURIComponent(url);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      'twitter-share',
      'width=550,height=450'
    );
  },

  // Facebook Share
  facebook: (url: string) => {
    const shareUrl = encodeURIComponent(url);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      'facebook-share',
      'width=550,height=450'
    );
  },

  // Copy Link
  copyLink: async (url: string, callback?: () => void) => {
    try {
      await navigator.clipboard.writeText(url);
      if (callback) callback();
    } catch (err) {
      console.error('Failed to copy link: ', err);
      alert('링크 복사에 실패했습니다.');
    }
  }
};
