Pewdie DashBoard 

Descrição:

O Pewdie Dashboard é um projeto com o objetivo de monitorar serviços e gerência de uma máquina através de uma interface web:

Serviços:

bind9
apache2
isc-dhcp-server
vsftpd
nfs-kernel-server
networking

Informações da máquina:

Nome do Host
Domínio
CPU
Disco
Memória

O acesso ao servidor será feito por meio de SSH

Telas:

1. Dashboard inicial com status de serviços específicos.
2. Dashboard secundário com informações da máquina.
3. Área para gerência de serviços da máquina.

Funcionalidades:

1. Gerar painel inicial
Consultar status de todos os serviços e colocar no site
Desenvolver um código em php que busca o status de todos os serviços (listados)
Comando: ‘service “serviço” status’ para gerar o DashBoard principal

2. Ligar serviço
Seleciona um serviço e starta
Comando: service “serviço” start

3. Desligar serviço
Seleciona um serviço e para
Comando: service “serviço” stop

4. Reiniciar serviço
Seleciona um serviço e reinicia
Comando: service “serviço” restart

5. Gerar dashboard secundário
Comandos:

Memória: free
Disco: df
Nome do host: hostname
Domínio: domainname
CPU: top e ps

Referências:

http://homelaber.com.br/linux-dashboards-ferramentas-simples-para-monitorar-o-seu-servidor-linux/
https://infraops.info/linux-dash-instalando-dashboard-no-ubuntu/
https://afaqurk.github.io/linux-dash/#/system-status
https://cockpit-project.org/
https://www.ispconfig.org/
https://www.directadmin.com/
