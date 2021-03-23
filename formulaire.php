//1 fichier ex.:formulaire.php ou formulaire.html

<HTML>
<HEAD>
<TITLE>E-Mail Formulaire</TITLE>
</HEAD>
<BODY>
<FORM method="POST" action="envoi.php">
<P>Votre nom:<br>
<INPUT type="text" name="nom" size=30>
</p>
<P>Votre adresse E-Mail:<br>
<INPUT type="text" name="email" size=30>
</p>
<P>Message:<br>
<textarea name="message" cols=30 rows=5></textarea>
</p><INPUT type="submit" value="Envoyer">
</FORM>
</BODY>
</HTML>