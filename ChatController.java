@Controller
public class ChatController {
    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public ChatMessage send(ChatMessage message) {
        return message;
    }

    @MessageMapping("/private")
    public void privateMessage(ChatMessage message, Principal user, SimpMessagingTemplate template) {
        template.convertAndSendToUser(message.getReceiver(), "/queue/messages", message);
    }
}
