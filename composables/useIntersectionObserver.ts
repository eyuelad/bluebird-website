type UseIntersectionObserverOptions = {
  callback: (isVisible: boolean, params: Record<string, any>) => void;
  delay?: number;
  once?: boolean;
  callbackParams?: Record<string, any>;
};

export default function useIntersectionObserver(
  elementId: string,
  {
    callback,
    delay = 0,
    once = false,
    callbackParams = {},
  }: UseIntersectionObserverOptions
) {
  let observer: IntersectionObserver | null = null;
  const targetElement = ref<HTMLElement | null>(null);
  let hasFired = false;

  const observe = () => {
    if (!targetElement.value) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target === targetElement.value &&
          (!once || !hasFired)
        ) {
          hasFired = true;
          setTimeout(() => {
            callback(true, callbackParams);
          }, delay);

          if (once && observer && targetElement.value) {
            observer.unobserve(targetElement.value);
          }
        }
      });
    });

    observer.observe(targetElement.value);
  };

  onMounted(() => {
    // Retry until the element is available (useful for async rendering)
    const retryUntilFound = setInterval(() => {
      const el = document.querySelector(elementId);
      if (el) {
        targetElement.value = el as HTMLElement;
        clearInterval(retryUntilFound);
        observe();
      }
    }, 100); // retry every 100ms until element appears
  });

  onUnmounted(() => {
    if (observer && targetElement.value) {
      observer.unobserve(targetElement.value);
    }
    observer = null;
    targetElement.value = null;
    hasFired = false;
  });
}
