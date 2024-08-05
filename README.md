1st Demo app MoMo education 5-8-24

The goal of the demo was to be in control of the bandwidth needed for the chats. First all streams are downsampled to monochrome and mod audio. Also streams of multiple pupils can be merged into one stream. The chat from classA and classB could start with two streams (all pupils combined into one) and uses no more bandwith than a chat between two people. (But he merging is not yet part of the demo) 

The various parts are:

- MoMo Server app (on the MoMo education website)
    The app used to schedule and start meetings

- PeerServer (from PeerJS)
    The server that enables peer to peer communication and the unique ids of peers. Now it is part of the teacher app, but it could probably be better in the MoMO server app. Then a peer can be from both schools and a chat can be directly a video chat of pupil1 at school1 with pupil2 at school2.

- Teacher app (ElectronJS desktop application, could be distributed with the Windows App store)
    This starts the meeting and does the merging of video streams and sending / receiving the chat;

- Pupil App (could be at the MoMo education website)
    This is the chat app: view the other participants, ask for sharing your name(s), the webcam etc etc.