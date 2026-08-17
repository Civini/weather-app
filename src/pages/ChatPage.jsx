import AIChat from "../components/AIChat";
import BackHomeButton from "../components/BackHomeButton";

function ChatPage({ weather, setActivePage }) {
  return (
    <>
      <BackHomeButton setActivePage={setActivePage} />
      <AIChat weather={weather} />
    </>
  );
}

export default ChatPage;