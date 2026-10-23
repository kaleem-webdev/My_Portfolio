// A template (unlike a layout) re-mounts on every navigation, so the page
// content fades up each time you move between pages.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
