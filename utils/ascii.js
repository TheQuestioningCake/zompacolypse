const ascii = ` ______                                              _                           
|___  /                                             | |                          
   / /   ___   _ __ ___   _ __    __ _   ___   ___  | | _   _  _ __   ___   ___ 
  / /   / _ \\ | '_ \` _ \\ | '_ \\  / _\` | / __| / _ \\ | || | | || '_ \\ / __| / _ \\
./ /___| (_) || | | | | || |_) || (_| || (__ | (_) || || |_| || |_) |\\__ \\|  __/
\\_____/ \\___/ |_| |_| |_|| .__/  \\__,_| \\___| \\___/ |_| \\__, || .__/ |___/ \\___|
                         | |                             __/ || |               
                         |_|                            |___/ |_|               
`;

const titleZombieAscii = `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▓█████▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒██▓███▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓██▒▒▓█████▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓██▓██▒▒▒▒▒▒▒▒▒▒▒▒▓██▓▓▓▓▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▓▓▓▒▓▓██▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██▓████▓██▓▓▓████▓▒▒▒▒▒▓▓▓▓▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▓█▓▓▓▓▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒█▓▓▓▓▓▒▒▒▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓██▒█▓▓▓▓▒▓▓█████████▓▒▒█▓▒▓▓▒██▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒█████▓▒▒▒▒▒▒▒▓▓▓███▒▓▓▒▓▓▓▓██▓█████████▓██▓▓▓█▓█▓█▓▒▒▒▒▒▒▒▒█▓▓█▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒█▒▓▓▓▓▓████████▓▓▒▒▒▓▓▒▒██▓▒▒▒▒▒▓▓▓██▓████▒▒▒▓█▓██▒▓█▓█████▒▒▒▒▒▒▒▒▒██▓▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒███▓▓▓▒██████████▓▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▓█▓█▓████▒▒▒▒▓▓▓██▓▓▓▓▓███▓▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒████▓▓▒▒████▓▒▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▓█████▓▒▒▒▒▒▓▓██▓▒▓▒▓███▓▒▒▒▒▒▒▒█▓▒▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▓██████▒▒▒██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓▓▓▒▒▒▒▓████████▒▒▒▒▒▓█▓██▒▒▒▓█▓▒▒▒▒▒▒▒▒▒██▒▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▓▓▓▒████▒▒██▓▓▓▒▒▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▓▒▒▓██▒▒████▓▒▒▒▒▒▓█▓▓█▓▒▒▓█▓▒▒▓▓▒▒▒▒▒▓▓▒▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▓▓▒▒▒▒▓███▓▓██▓█▓▓▓▓▒▒▒▒▓▓▓▓▓▓▒▒▒▓▒▓▓▓▓██▒▒███▓▒▒▒▒▓▓▓▓▒▒▓█▒▒▓▓▓▓▓▒▒▒▓▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒
▒▒▒▒▓▓▒▒▒▒▒██████████▓▓▓▒▒▒▓██████▓▒▒▒▒▓▓▓▓████████▒▒▒▓▒▓▓▓▒████████▓▓▒▒▒▓▓▒▒███▒▓▓▒▒▒▒▒▒▒
▒▒▒▒▓▓▓▓▒▒▒▓███▓████▒▓▒▒▒▒▒████████▒▒▒▒▓▓▒█████████▒▒▒▒▓▓▓▓▒████████▓▒▒▓▓▓▓▒▓███▓▒▓▒▒▒▒▒▒▒
▒▒▒▒▓▓▓▓▒▒▒▓███▒▓███▒▒▒▒▒▒▒▓██████▓▒▒▓▓▓▓▓████████▓▒▒▒▒▓▓▒▒▒▓███████▓▒▒████▓████▓▒▓▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒███▓▒███▓▒▒▒▒▒▒▒██████▒▒▒▒▓▓▓███▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▓██▓████▒▓███▓▒▒███▓▓▓▓▓▓▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒████▒▓██▓▒▒▒▒▒▒▓█▓▓▓▓▓▒▒▒▒▒▒▓██▒▒▒▓███▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▓▓▓▒███▓▒▒▒████▒▒▓▓▓▓▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▓███▒▒▓▓▓▓▒▒▒▒▒▒▓▓▒▒▒▒▓▓▓▒▒▓▓▒▒▒▒▒▒▒████▓▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▓▒▒██▓▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▓███▒▒▒▒▒▓▓▒▒▒▒▓▓▒▒▒▒▒▒▒▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒████▓▒▒▒▒▒▒▒▒▓▓▒▒▒▓▓▓██▒▒▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▓▓▓▒▒▒▓▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒███▓▒▒▒▒▒▒▒▓▓▒▒▒▒▒▓█▓▓▓▒▒▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▓██▓▒▒▒▒▒▒▓▓▒▒▒▒▓▒▒▒▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▓▒▒▒▒▒▒▓█▓▒▓▓▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▓▓▓▒▒▓▓▒▒▒▒▒▒▒▒▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▓▒▒▒▒▒▒▓█▒▒▒▒▓▓▒▒▒▒▒▒▒▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒█████▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▓▓▓████▓▒▒▓▓▓▒▒▒▒▒██▓▒▓▓███▒▒▒▒▒▒▒█▓▒▒▒▒
▒▒▒▒▒▒▒▒▒▓██████▓▓▒▒▒▓▓▒▒▒▓▓▓▒▒▓▓▓▓▓▓█▓▒▒▒▒▒▒▒▒▒▓█████▓▒▒▒▒▒████▓▒▓▓███████▓▓▒▒▒▒▒████▓▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

`
const firstZombieAscii = `░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░▒▒▓▓▓█▓▓▒▒▒▒▒▒▓▒▒▒▒▓▓▒▒▒▒▒▓▓▓▓▓▓▒░░░░░░░░░░▒░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▒▒▒▓▒▒▒▒▒▒▒▒▓▒▒▒▒▓▒▒▓▓▒▒▒▒▒▒▒▒▓▓█▓▒░░░░░▒░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▒▓▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓█▓▓▒░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░▓███▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓██▓██▓▓▓▒▒▒▒▒▒▒▓▓▒▓▓▓░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░▓███▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓█████▓▓▓▓▓▓█▒▒▒▒▒▒▒▓▒▒▒▒▓█▓░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓███▓▓▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒███▓▓▓▓▓▓▓▓▓█▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓█▓▒▒░░░░░░░░░░░░░
░░░░░░░░░░░░░▓███▓▓▓▓▓█▓█▓▒▒▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▒▒▒▒▒▒▓▓▒▒▒▓█▓░░░░░▒▒░░░░░░
░░░░░░░░░░░░▓███▓▓▓▓▓▓▓█▓▒▒▒▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██▓▓▓▓▓▓▓▓▓█▓▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▓▓░░░░░░░░░░░░
░░░░░░░░░░░▓██▓▓▓▓▓▓███▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██▓▓▓▓▓▓▓▓█▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▓▓░░░░░░░░░░░
░░░░░░░░░░▓████▓▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▓█▓▒▒▒▒▓██▓███▓▓▓██▓▒▒▒▒▒▒▒▓██▓▒▒▒▓▓▒▒█▓░░░░░░░░░░
░░░░░░░░░▒█▓▓▒▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▒▒▓▓▓▓▓▒▒▒▒▒▒▒▒▒▓▓▓▒▒▓▒▒▒▒▒█▒░░░░░░░░░
░░░░░░░░░█▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓█░░░░░░░░░
░░░░░░░░░█▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓█▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒█▒░░░░░░░░
▒▒▒▒▒▒▒░▒█▒▒▒▓▒▒▒▒▓▓███▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓█▓▒▒▒▒▒▒▒▓█▓▓▓▓▒▒▒▒▒▒▓▓▒▒▒▓▓▓█▓▓▒▒▒▒▒▒▒▒▒█▓░░░░░░░░
░░░░░░░░▒█▓▒▒▒▒▒▒▓█▓▒▓▓▒▓▓▓█▓▓▓▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▓▓▒▓▓▓███▓▒▒▒▓▓▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▓▓▓█▒▒▒▒▒▒░░
░░░░░░░░▒█▓▓▒▒▒▒▓▓▒▒▒▓▒▒▓█▓▓██▓▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▓▓█░░░░░░░░
░░░░░░░░░█▓█▓▒▒▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▓▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓█░░░░░░░░
░░░░░░░░░█▓█▒▒▒▓▒▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▒▒▒▒▒▒▓▓█░░░░░░░░
░░░░░░░░░███▒▒▒▒▒▒▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓██▓▓▓▓▓██▓▓█▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▒▒▒▒▒▒▓▓█░░░░░░░░
░░░░░░░░░▓█▓▒▒▒▒▒▓█▓▒▒▒▒▒░░░░░░░▒▒▒▒▒▓██▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▒▒▒▒░░░░░░▒▒▒▒▒▒▓█▓▓▒▒▓▓▓█▒░░░░░░░░
░░░░░░░░░▒█▓▓▒▒▓▓██▒▒░░░░░░░░░░░░░░▒▒▒▓█▓▓▓▓▒▒▓▓▓▓██▒▒▒░░░░░░░░░░░░░░▒▒▒█▓▒▒▒▓▓▓█░░░░░░░░░
░░░▒▓▓▓▓▒▒█▓▓▒▒▒▒█▓▒░░░░░░░░░░░░░░░░░▒▓█▓▓▓▒▒▒▒▓▓▓█▓▒░░░░░░░░░░░▒▓▓░░░▒▒▓█▒▒▒▒▓▓█▒▓▓▓▓▓░░░
░░█▓▒▒▒▒▓███▓▓▒▒▓█▓░░░░░░░░░░░░░░░░░░░▓█▓▓▒▒▒▒▒▒▓██▒░░░░░░░░░░░░░▒▒░░░░▒▓█▓▓▒▓▓██▓▒▒▒▒▒█▓░
░█▓▒▓▓▓▓▒▓▓█▓█▒▒▓█▓░░░░░░▒▓░░░░░░░░░░░▓█▓▒▒▒▒▒▒▒▓██▒░░░░░░░░░░░░░░░░░░░▒▒█▓▓▒▓▓█▓▒▓▓▓▓▒▒▓▒
█▓▒▒▓█▓██▓▓██▓▒▒▓██░░░░░░▒▓░░░░░░░░░░▒█▓▒▒▓▓▓▓▒▒▒▓█▒░░░░░░░░░░░░░░░░░░░░▓█▓▓▒▓██▓██▓▓█▓▒▒█
█▓▒▒▓█▓▓▓███▒▒▒▒▒▓█▓░░░░░░░░░░░░░░░░▒██▒▓▓▒▓▓▓█▓▒▒██▒░░░░░░░░░░░░░░░░░░▒██▓▓▒▒▒██▓▓▓▓█▓▒▒█
▒█▒▒▓█▓▓▓▓█▒▒▓▒▒▒▓▓█▓▒░░░░░░░░░░░░▒▓██▒▒▒▒▒▓▒▒▒▓█▒▒██▒░░░░░░░░░░░░░░░░▒▓█▓▓▓▒▒▒▒██▓▓█▓▒▒▓▓
░▓█▒▒▓▓▓▓███▓▒▒▒▒▒▓▓██▓▓▒▒▒░░░▒▒▓███▓▒▒▒▓█▓▒▒█▓▒▓█▒▓██▓▒░░░░░░░░░░░░▒▓██▓▓▓▓▓▓██▓██▓▓▒▒▓█░
░░▒█▓▒▓▓▓██▓██▓▒▒▒▒▓▓▓▓███████████▓▓▓▒▓███▓▒▒███▓▓█▓▒▓███▓▓▒▒▒▒▒▒▓▓▓██▓▓▓▓▒▒▓███▓▓█▓▒▓█▒░░
░░░░▒█▓▓▓██▓██▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▒▓████▒▒▒████▓▒█▓▒▒▓▓▓▓▓██████▓▓▓▓▒▒▒▒▒▒▒██▓▓██▒█▓░░░░
░░░░░░▓▓▓▓██▓███▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒█▓▒▓████▓▒▓▒▓████▓▒█▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▒██▓▓▓█▓█▒░░░░░
░░░░░░░▓▓▒▓█████▒▒▒▒▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▒▓▓█▓▓▓▓█▓▒▒▓▓▓▓▓▓▒▒▒▒▓▓▓▒▓▓▓▓▒▒▒▒▓▓▓▒▒▒▒█▓▓▓███░░░░░░░
░░░░░░░░█▓▒▒▓▓██▓▓▒▒▓▓▒▒▓▓▓▒▓▓▒▓▒▒▒▓▓▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▒▒▓▓▓▒▒▒▓████▓▒▒▓█▓██▓▓█▒░░░░░░░
░░░░░░░░▒█▒▒▒▓▓█▓█▓▓▓▒▒▒▓▒▓▓▓▓████████████▓▓▓▓▓██████████▓▓▓▓▒▓▓▒▒▒▓▓▓▒▓▓████▓▒▒▓█░░░░░░░░
░░░░░░░░░█▓▒▒▒▓██▓█▓▒▒▒▒█▒▓██▓▓▓▒▓█▓▒▒▓▓▓▒▓█▓▓▓▓█▓▒▓█▓▒▓▓▓███▓▒▓▒▒▒▒▓▓▓████▓▓▒▒▒█▒░░░░░░░░
░░░░░░░░░▒█▒▒▒▓██▓▓█▒▒▒▒█▒███░▓▒░▒▓░▒░▓░░░░▓░░░▒▓▒░░▓▒░▒▓▒████▓▓▒▒▒▒▒▓▓▓▓██▓▒▒▒▓█░░░░░░░░░
░░░░░░░░░░▓█▓▓▓██▓▓▓▓▒▒▒▓▓███▓██▒▓▓▒▓▒▓▒░▒░▓▒▒░▒█▓▓▓█████████▓▓▒▒▒▒▒▓▓▓▓▓███▓▓▓█░░░░░░░░░░
░░░░░░░░░░░▒▓▓▓▓█▓▓▓▓▓▒▒▓▓██▓██▓████████████████████████▓████▒▒▒▒▒▓▓▓▓▓▓▓▓█▓▓▓▒░░░░░░░░░░░
░░░░░░░░░░░░░░░▒█▓▓▓▓█▒▒▒▓▓█▓██▓████████████▓███████████▓█▓█▓▒▓▒▒▒█▓▓▓▓▓▓██▓░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓█▓▓▓▓▓▓▒▒▓▒██▓█▓▓███████████████████████▓▓██▒▓▒▒▒▓▓▓▓▓▓█████░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓█▓▓▓▓▓█▒▒▒▒▒███▓▓█████▓▓▓▓█████▓▓▓▓▓████▓▓█▓▒▓▒▒▒█▓▓▓▓▓██▓▓█░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▒█▓▓▓▓▓▓▓▒▒▒▒▓█▒▒█████▓▓▓▓▓████▓████▓▓▓██▓▓█▒▒▓▒▒▒▓▓▓▓▓███▓█▓░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░█▓▓▓▓▓▓█▓▒▒▒▒█▓▒▓███▓▓▓▓▓█████████▓▓▓███▒██▒▒▓▒▒▓▓▓▓▓▓██▓██░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░█▓▓▓▓▓▓█▒▒▒▒▓██▒▓░▒█▒▓█▓██████████▓▓█▒▒█▓▓█▓▒▒▒▓▓▓▓▓█████░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▓█▓▓▓▓▓▓▒▒▒▓▒▓██▓▓█░░▓░▓▓▓▓▓▓▓▓▒▒▓▒▒███▒▒▓█▓▒▒▓▓▓▓▓██▓▒░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░▓█▓▓▓▓▓▒▒▓▓▒▒▓██████▓▒░▒▓░▒▓█▓▓███▓▓▒▒▒▒█▓▒▓▓▓█▓▒▒░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░▒▓██▓▓▓▒▓█▓▒▒▒▓▓▓█████████▓▓▓▓▓▓▓▓▒▓▒▓█▒▓█▓▒░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓█▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▒▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒█▓▒▓▓██▓▓▓▓▓▓▓████▓▓█▓█▓▓▓▒▒▓█▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓█▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓██████████▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`
export { ascii, titleZombieAscii, firstZombieAscii}