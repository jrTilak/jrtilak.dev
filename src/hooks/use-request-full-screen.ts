/**
 * Taken from @jrtilak/lazykit
 * See more about this method: https://lazykit.jrtilak.dev/docs/react-hooks/web-api/useRequestFullScreen
 */

import { useState, useCallback, useEffect, RefObject } from 'react';

/**
 * Custom hook to handle entering and exiting fullscreen mode.
 */
const useRequestFullScreen = <T extends HTMLElement>(ref?: RefObject<T>) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // Determine the target element to request fullscreen on
  const getElement = useCallback(() => {
    return ref?.current || document.documentElement;
  }, [ref]);

  const requestFullScreen = useCallback(() => {
    if (isFullScreen) return;
    const element = getElement();

    if (element.requestFullscreen) {
      element.requestFullscreen();
      //@ts-expect-error: error
    } else if (element.mozRequestFullScreen) {
      // Firefox
      //@ts-expect-error error
      element.mozRequestFullScreen();
      //@ts-expect-error error
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      //@ts-expect-error error
      element.webkitRequestFullscreen();
      //@ts-expect-error error
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      //@ts-expect-error error
      element.msRequestFullscreen();
    }

    setIsFullScreen(true);
  }, [isFullScreen]);

  const exitFullScreen = useCallback(() => {
    if (!isFullScreen) return;
    if (document.exitFullscreen) {
      document.exitFullscreen();
      //@ts-expect-error error
    } else if (document.mozCancelFullScreen) {
      // Firefox
      //@ts-expect-error error
      document.mozCancelFullScreen();
      //@ts-expect-error error
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      //@ts-expect-error error
      document.webkitExitFullscreen();
      //@ts-expect-error error
    } else if (document.msExitFullscreen) {
      // IE/Edge
      //@ts-expect-error error
      document.msExitFullscreen();
    }

    setIsFullScreen(false);
  }, [isFullScreen]);

  const handleFullScreenChange = useCallback(() => {
    if (document.fullscreenElement) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange); // Safari
    document.addEventListener('mozfullscreenchange', handleFullScreenChange); // Firefox
    document.addEventListener('MSFullscreenChange', handleFullScreenChange); // IE/Edge

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener(
        'webkitfullscreenchange',
        handleFullScreenChange,
      );
      document.removeEventListener(
        'mozfullscreenchange',
        handleFullScreenChange,
      );
      document.removeEventListener(
        'MSFullscreenChange',
        handleFullScreenChange,
      );
    };
  }, [handleFullScreenChange]);

  return { isFullScreen, requestFullScreen, exitFullScreen };
};

export default useRequestFullScreen;
