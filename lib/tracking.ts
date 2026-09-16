const legacyGtmId = "GTM-K82N4ZRX";
const legacyTidioPublicKey = "ujeawwtc67wy33eod6rjblcp8qwuyjp7";

function cleanGtmId(value: string | undefined) {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  return /^GTM-[A-Z0-9]+$/.test(trimmed) ? trimmed : null;
}

function cleanPublicKey(value: string | undefined) {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  return /^[A-Za-z0-9_-]+$/.test(trimmed) ? trimmed : null;
}

function cleanPublicUrl(value: string | undefined) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export const trackingConfig = {
  gtmId: cleanGtmId(process.env.NEXT_PUBLIC_GTM_ID) ?? legacyGtmId,
  tidioPublicKey: cleanPublicKey(process.env.NEXT_PUBLIC_TIDIO_PUBLIC_KEY) ?? legacyTidioPublicKey,
  umamiScriptSrc: cleanPublicUrl(process.env.NEXT_PUBLIC_UMAMI_SCRIPT_SRC),
  umamiWebsiteId: cleanPublicKey(process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID),
};
