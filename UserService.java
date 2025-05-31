@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User register(User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return repository.save(user);
    }

    public User login(String username, String password) {
        User user = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Not found"));
        if (new BCryptPasswordEncoder().matches(password, user.getPassword()))
            return user;
        throw new BadCredentialsException("Invalid");
    }
}
