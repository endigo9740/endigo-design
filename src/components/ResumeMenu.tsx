import { Menu, Portal } from "@skeletonlabs/skeleton-react";

const RESUME_DOC_ID = "1JW6vAQvfEr-rqN9lSwpQNmTzfc2bNt5wIJxstOOmpZ4";

const FULLSCREEN_URL =
  "https://docs.google.com/document/d/e/2PACX-1vTXIHHD4NuQLXrSOJheUW6R-fJIKDrvt0R8VE5o9E1VmP7jTYybQziw01PC45jvAtM3-WP9CzqyRjXc/pub?embedded=true";
const GOOGLE_DOCS_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/edit?usp=sharing`;
const PDF_DOWNLOAD_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`;

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const URLS_BY_VALUE: Record<string, string> = {
  fullscreen: FULLSCREEN_URL,
  docs: GOOGLE_DOCS_URL,
  download: PDF_DOWNLOAD_URL,
};

export default function ResumeMenu() {
  const handleSelect = (details: { value: string }) => {
    const url = URLS_BY_VALUE[details.value];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Menu onSelect={handleSelect}>
      <Menu.Trigger className="btn preset-filled-primary-500">
        <span>Options</span>
        <ExternalLinkIcon />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="fullscreen">
              <Menu.ItemText>View Full Screen</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="docs">
              <Menu.ItemText>Via Google Docs</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="download">
              <Menu.ItemText>Download PDF</Menu.ItemText>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu>
  );
}
